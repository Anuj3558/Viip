import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PartnershipsAdmin = () => {
  const [partnerships, setPartnerships] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    link: '',
    featured: false,
    image: null
  });
  const [editingId, setEditingId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPartnerships();
  }, []);

  const fetchPartnerships = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/partnerships`);
      setPartnerships(response.data);
    } catch (error) {
      toast.error('Failed to fetch partnerships');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('link', formData.link);
      formDataToSend.append('featured', formData.featured);
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }

      if (editingId) {
        await axios.put(`${import.meta.env.VITE_APP_BACKEND_URL}/api/partnerships/${editingId}`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success('Partnership updated successfully');
      } else {
        await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/api/partnerships`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        toast.success('Partnership added successfully');
      }

      resetForm();
      fetchPartnerships();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save partnership');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (partnership) => {
    setFormData({
      name: partnership.name,
      description: partnership.description,
      link: partnership.link,
      featured: partnership.featured,
      image: null
    });
    setEditingId(partnership._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this partnership?')) {
      try {
        setIsLoading(true);
        await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/api/partnerships/${id}`);
        toast.success('Partnership deleted successfully');
        fetchPartnerships();
      } catch (error) {
        toast.error('Failed to delete partnership');
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      link: '',
      featured: false,
      image: null
    });
    setEditingId(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer position="top-right" autoClose={3000} />
      <h1 className="text-3xl font-bold mb-8 text-center">Partnerships & Collaborations Management</h1>
      
      {/* Partnership Form */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {editingId ? 'Edit Partnership' : 'Add New Partnership'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Partner Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="link">
              Website Link (optional)
            </label>
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com"
            />
          </div>
          
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="featured"
              name="featured"
              checked={formData.featured}
              onChange={handleInputChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="featured" className="ml-2 block text-gray-700">
              Featured Partnership
            </label>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="image">
              {editingId ? 'Update Logo (optional)' : 'Logo (required)'}
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              accept="image/*"
              required={!editingId}
            />
            {editingId && !formData.image && (
              <p className="text-sm text-gray-500 mt-1">
                Current logo will be retained if no new image is selected
              </p>
            )}
          </div>
          
          <div className="flex justify-end space-x-4">
            {editingId && (
              <button
                type="button"
                onClick={resetForm}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
                disabled={isLoading}
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              disabled={isLoading}
            >
              {isLoading ? 'Saving...' : editingId ? 'Update' : 'Save'}
            </button>
          </div>
        </form>
      </div>
      
      {/* Partnerships List */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Partnerships List</h2>
        {isLoading && partnerships.length === 0 ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        ) : partnerships.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No partnerships found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border-b">
                  <th className="py-3 px-4 text-left">Logo</th>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Description</th>
                  <th className="py-3 px-4 text-left">Featured</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {partnerships.map((partnership) => (
                  <tr key={partnership._id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <img
                        src={partnership.image}
                        alt={partnership.name}
                        className="w-12 h-12 object-contain"
                      />
                    </td>
                    <td className="py-3 px-4">{partnership.name}</td>
                    <td className="py-3 px-4 max-w-xs truncate">{partnership.description}</td>
                    <td className="py-3 px-4">
                      {partnership.featured ? (
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          Featured
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                          Regular
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(partnership)}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(partnership._id)}
                          className="px-3 py-1 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnershipsAdmin;