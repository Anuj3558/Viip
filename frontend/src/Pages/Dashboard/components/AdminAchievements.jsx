import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Editor } from '@tinymce/tinymce-react';

const AdminAchievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editAchievementId, setEditAchievementId] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    date: new Date().toISOString().split('T')[0],
    stats: [{ label: '', value: '' }],
    featuredImage: null,
    featuredImagePreview: '',
    featuredImageAlt: '',
    metaDescription: '',
    isPublished: false
  });
  
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const editorRef = useRef(null);

  useEffect(() => {
    fetchAchievements();
  }, []);

  useEffect(() => {
    if (editAchievementId) {
      const fetchAchievement = async () => {
        try {
          const res = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/achievements/${editAchievementId}`);
          const achievement = res.data;
          setFormData({
            title: achievement.title,
            slug: achievement.slug,
            excerpt: achievement.excerpt,
            content: achievement.content,
            category: achievement.category,
            date: achievement.date.split('T')[0],
            stats: achievement.stats.length > 0 ? achievement.stats : [{ label: '', value: '' }],
            featuredImage: null,
            featuredImagePreview: achievement.featuredImage || '',
            featuredImageAlt: achievement.featuredImageAlt || '',
            metaDescription: achievement.metaDescription || '',
            isPublished: achievement.isPublished
          });
        } catch (err) {
          console.error(err);
          setError(err.response?.data?.message || 'Failed to fetch achievement');
        }
      };
      fetchAchievement();
    } else {
      resetForm();
    }
  }, [editAchievementId]);

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: '',
      date: new Date().toISOString().split('T')[0],
      stats: [{ label: '', value: '' }],
      featuredImage: null,
      featuredImagePreview: '',
      featuredImageAlt: '',
      metaDescription: '',
      isPublished: false
    });
    setFormError('');
  };

  const fetchAchievements = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_APP_BACKEND_URL}/api/achievements`);
      setAchievements(res.data.achievements);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch achievements');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStatChange = (index, field, value) => {
    const newStats = [...formData.stats];
    newStats[index][field] = value;
    setFormData(prev => ({
      ...prev,
      stats: newStats
    }));
  };

  const addStat = () => {
    setFormData(prev => ({
      ...prev,
      stats: [...prev.stats, { label: '', value: '' }]
    }));
  };

  const removeStat = (index) => {
    const newStats = formData.stats.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      stats: newStats
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        featuredImage: file,
        featuredImagePreview: URL.createObjectURL(file)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoading(true);
    setFormError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('slug', formData.slug);
      formDataToSend.append('excerpt', formData.excerpt);
      formDataToSend.append('content', formData.content);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('stats', JSON.stringify(formData.stats));
      if (formData.featuredImage) formDataToSend.append('featuredImage', formData.featuredImage);
      formDataToSend.append('featuredImageAlt', formData.featuredImageAlt);
      formDataToSend.append('metaDescription', formData.metaDescription);
      formDataToSend.append('isPublished', formData.isPublished);

      if (editAchievementId) {
        await axios.put(`${import.meta.env.VITE_APP_BACKEND_URL}/api/admin/achievements/${editAchievementId}`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      } else {
        await axios.post(`${import.meta.env.VITE_APP_BACKEND_URL}/api/admin/achievements`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
      }

      setShowModal(false);
      setEditAchievementId(null);
      resetForm();
      fetchAchievements();
    } catch (err) {
      setFormError(err.response?.data?.message || 'An error occurred');
      console.error('Error submitting form:', err);
    } finally {
      setFormLoading(false);
    }
  };

  const generateSlug = () => {
    if (!formData.title) return;
    const generatedSlug = formData.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    setFormData(prev => ({
      ...prev,
      slug: generatedSlug
    }));
  };

  const handleEdit = (id) => {
    setEditAchievementId(id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this achievement?')) {
      try {
        await axios.delete(`${import.meta.env.VITE_APP_BACKEND_URL}/api/admin/achievements/${id}`);
        fetchAchievements();
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to delete achievement');
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Achievements Management</h1>
        <button
          onClick={() => {
            setEditAchievementId(null);
            setShowModal(true);
          }}
          className="px-4 py-2 bg-blue-900 text-white hover:bg-blue-700 transition-colors"
        >
          Add New Achievement
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden">
          {achievements.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No achievements found. Create your first achievement.
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {achievements.map((achievement) => (
                  <tr key={achievement._id}>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">{achievement.title}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">{achievement.category}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold ${achievement.isPublished ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {achievement.isPublished ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {new Date(achievement.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <button
                        onClick={() => handleEdit(achievement._id)}
                        className="text-blue-900 hover:text-blue-700 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(achievement._id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-auto  h-full w-full flex items-center justify-center">
          <div className="relative mx-auto p-6 border w-full max-w-4xl top-[40vh] shadow-lg bg-white">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-gray-900">
                {editAchievementId ? 'Edit Achievement' : 'Create New Achievement'}
              </h3>
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditAchievementId(null);
                  resetForm();
                }}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {formError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700">
                {formError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Title *
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="title"
                      name="title"
                      type="text"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="flex-1 px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                      placeholder="Enter achievement title"
                    />
                    <button
                      type="button"
                      onClick={generateSlug}
                      disabled={!formData.title}
                      className="px-4 py-2 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Generate Slug
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="slug" className="block text-sm font-medium text-gray-700 mb-1">
                    Slug *
                  </label>
                  <input
                    id="slug"
                    name="slug"
                    type="text"
                    value={formData.slug}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                    placeholder="achievement-url-slug"
                  />
                </div>

                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                    Excerpt *
                  </label>
                  <textarea
                    id="excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                    placeholder="Short description of your achievement"
                  />
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                    Content *
                  </label>
                  <Editor
                    apiKey={import.meta.env.VITE_APP_TINYMCE_API_KEY || '7kfg59w4j6mjz4ecuykilibruwce9i85fkwtszj6s63lk5d5'}
                    onInit={(evt, editor) => (editorRef.current = editor)}
                    value={formData.content}
                    init={{
                      height: 500,
                      menubar: true,
                      plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                      ],
                      toolbar:
                        'undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help',
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onEditorChange={(newContent) => 
                      setFormData(prev => ({ ...prev, content: newContent }))
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <input
                    id="category"
                    name="category"
                    type="text"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                    placeholder="e.g., Awards, Milestones"
                  />
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date *
                  </label>
                  <input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Statistics</label>
                {formData.stats.map((stat, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <input
                        type="text"
                        value={stat.label}
                        onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                        placeholder="Label (e.g., Customers)"
                        className="w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        value={stat.value}
                        onChange={(e) => handleStatChange(index, 'value', e.target.value)}
                        placeholder="Value (e.g., 10,000+)"
                        className="w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => removeStat(index)}
                        className="px-3 py-2 bg-red-100 text-red-700 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addStat}
                  className="mt-2 px-3 py-2 bg-blue-100 text-blue-900 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-900"
                >
                  Add Statistic
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="featuredImage" className="block text-sm font-medium text-gray-700 mb-1">
                    Featured Image
                  </label>
                  <input
                    id="featuredImage"
                    type="file"
                    onChange={handleImageUpload}
                    accept="image/*"
                    className="w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                  />
                  {formData.featuredImagePreview && (
                    <div className="mt-2">
                      <img 
                        src={`${formData.featuredImagePreview}`} 
                        alt="Preview" 
                        className="h-32 object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            featuredImage: null,
                            featuredImagePreview: ''
                          }));
                        }}
                        className="mt-2 text-sm text-red-600 hover:text-red-800"
                      >
                        Remove Image
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="featuredImageAlt" className="block text-sm font-medium text-gray-700 mb-1">
                    Featured Image Alt Text
                  </label>
                  <input
                    id="featuredImageAlt"
                    name="featuredImageAlt"
                    type="text"
                    value={formData.featuredImageAlt}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                    placeholder="Description of the image for accessibility"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="metaDescription" className="block text-sm font-medium text-gray-700 mb-1">
                  Meta Description
                </label>
                <textarea
                  id="metaDescription"
                  name="metaDescription"
                  value={formData.metaDescription}
                  onChange={handleInputChange}
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-900 focus:border-blue-900"
                  placeholder="SEO description (optional)"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isPublished"
                  name="isPublished"
                  checked={formData.isPublished}
                  onChange={(e) => 
                    setFormData(prev => ({ ...prev, isPublished: e.target.checked }))
                  }
                  className="h-4 w-4 text-blue-900 focus:ring-blue-900 border-gray-300"
                />
                <label htmlFor="isPublished" className="ml-2 block text-sm text-gray-700">
                  Publish this achievement
                </label>
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditAchievementId(null);
                    resetForm();
                  }}
                  className="px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={formLoading}
                  className="px-4 py-2 border border-transparent shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {editAchievementId ? 'Updating...' : 'Creating...'}
                    </>
                  ) : editAchievementId ? 'Update Achievement' : 'Create Achievement'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAchievements;