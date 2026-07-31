import { useState } from 'react';
import { Upload, CheckCircle2, FileText, Image, X } from 'lucide-react';
import TruckImage from "../assets/images/truck.jpeg";

function Button({ children, onClick, type = 'button', disabled = false, className = '', variant = 'primary' }) {
  const baseStyles = 'px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer';
  const variants = {
    primary: 'bg-green-600 hover:bg-green-700 text-white disabled:bg-gray-400',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-900'
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

function Checkbox({ id, checked, onChange, label }) {
  return (
    <div className="flex items-start gap-3">
      <input type="checkbox" id={id} checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 mt-1 cursor-pointer accent-green-500 rounded" />
      <label htmlFor={id} className="text-sm text-gray-700 cursor-pointer">{label}</label>
    </div>
  );
}

function GetQuote({ onBack }) {
  const [formData, setFormData] = useState({
    name: '', company: '', phone: '', email: '',
    address: '', details: '', termsAccepted: false,
  });

  // ✅ Multiple files support
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...selected]);
    // Reset input so same file can be re-added if needed
    e.target.value = '';
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({ ...prev, termsAccepted: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.termsAccepted) {
      alert('Please fill in all required fields and accept the terms.');
      return;
    }
    setIsLoading(true);
    try {
      // ✅ FormData for file + text — no Content-Type header
      const data = new FormData();
      data.append('access_key', 'b1828192-c4e4-43fd-8dcc-7133429b5838');
      data.append('subject', 'New Quote Request from ' + formData.name);
      data.append('name', formData.name);
      data.append('company', formData.company);
      data.append('phone', formData.phone);
      data.append('email', formData.email);
      data.append('address', formData.address);
      data.append('details', formData.details);

      // ✅ Attach all files — Web3Forms supports 'attachment' field
      if (files.length > 0) {
        // Web3Forms only supports single attachment — send first file
        data.append('attachment', files[0]);
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert('Submission failed: ' + result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-lg border border-gray-200 shadow-lg p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Thank you for giving Green Raven the opportunity to work with you.
          </h2>
          <p className="text-gray-600 mb-6">
            Our team will be in contact shortly with a price quote or any pertinent questions
            that will allow us to give you such a quote. We will attempt to provide your quote
            same-day or within 24 to 48 hours.
          </p>
          <Button onClick={() => window.location.href = '/'}>Return to Home Page</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* ✅ Full-screen Hero — 100vh, fully responsive */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          height: '100vh',
          marginTop: '0',
        }}
      >
        {/* Background image covers full viewport */}
        <img
          src={TruckImage}
          alt="Shipping Truck"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content: heading top, cards bottom */}
        <div className="absolute inset-0 flex flex-col justify-between px-6 sm:px-10 md:px-16 pt-24 pb-10">

          {/* Top: heading + subtitle — centered */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 drop-shadow-lg mt-45">
              Get a <span className="text-green-400">Quote</span>
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl font-semibold drop-shadow">
              Lowest possible shipping cost with no handling fees
            </p>
            <p className="text-gray-300 text-sm sm:text-base mt-1">
              Direct from manufacturers — 30% to 50% less than traditional distributors
            </p>
          </div>

          {/* Bottom: 3 cards inside hero */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-white mb-2 text-sm sm:text-base">💰 Save 30–50%</h3>
              <p className="text-xs sm:text-sm text-gray-200">
                Working directly with domestic and international manufacturers — no brokers, no inflated handling fees.
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-white mb-2 text-sm sm:text-base">☀️ Best Pricing on Solar Hardware</h3>
              <p className="text-xs sm:text-sm text-gray-200">
                Batteries, inverters, and solar panels. Upload a BOM or list what you need for a fast quote.
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-xl p-4 sm:p-5">
              <h3 className="font-bold text-white mb-2 text-sm sm:text-base">📋 Custom Requirements</h3>
              <p className="text-xs sm:text-sm text-gray-200">
                Specify shipping, U.S. domestic, FEOC compliant hardware, or any other special instructions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* ✅ Stylish Intro Text */}
        <div className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 rounded-xl p-6">
          <p className="text-gray-700 leading-relaxed text-base">
            To receive a quote for your solar hardware, please complete the form below. Our best pricing typically is for{" "}
            <span className="font-semibold text-green-700">batteries, inverters and solar panels.</span>{" "}
            You may either upload a BOM for any given project and we will respond with pricing from the BOM where we can provide the lowest pricing, or you can manually enter precisely the items you need.
          </p>
        </div>

        {/* ✅ Project Details Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">Project Details</h2>
          <p className="text-sm text-gray-500 mb-5">
            Upload your BOM, drawings, images, or any supporting files — or describe your requirements below.
          </p>

          {/* ✅ File Upload — accepts docs + images */}
          <div className="mb-5">
            <label
              htmlFor="file-input"
              className="w-full bg-green-500 text-white text-center py-3 px-4 rounded-lg cursor-pointer hover:bg-green-600 transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <Upload className="w-4 h-4" />
              Upload Files (BOM, Drawings, Images)
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="file-input"
              multiple
              accept=".pdf,.xlsx,.xls,.csv,.doc,.docx,.jpg,.jpeg,.png,.gif,.webp"
            />
            <p className="text-xs text-gray-400 mt-2 text-center">
              Supported: PDF, Excel, Word, CSV, JPG, PNG, GIF, WEBP
            </p>

            {/* File preview list */}
            {files.length > 0 && (
              <div className="mt-3 space-y-2">
                {files.map((file, index) => {
                  const isImage = file.type.startsWith('image/');
                  return (
                    <div key={index} className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                      <div className="flex items-center gap-2">
                        {isImage
                          ? <Image className="w-4 h-4 text-blue-500" />
                          : <FileText className="w-4 h-4 text-green-600" />
                        }
                        <span className="text-sm text-gray-700 truncate max-w-xs">{file.name}</span>
                        <span className="text-xs text-gray-400">({(file.size / 1024).toFixed(0)} KB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              Or enter details of your request below
            </label>
            <textarea
              name="details"
              value={formData.details}
              onChange={handleInputChange}
              placeholder="Enter your project details, equipment specifications, or any special requirements..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              rows={5}
            />
          </div>
        </div>

        {/* ✅ Contact Info Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Your Contact Information</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input type="text" name="company" value={formData.company} onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ship to Address</label>
              <input type="text" name="address" value={formData.address} onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            </div>

            {/* Terms */}
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <Checkbox
                id="terms"
                checked={formData.termsAccepted}
                onChange={handleCheckboxChange}
                label={
                  <>
                    I give Green Raven permission to contact me including the ability to opt out at any time per our{' '}
                    <a href="/terms-of-use" target="_blank" rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 font-semibold underline">
                      Terms and Conditions
                    </a>
                    . Note: Green Raven will never share your contact information with a third party without your permission.
                  </>
                }
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-2">
              <Button type="submit" disabled={!formData.termsAccepted || isLoading} className="px-12 py-3 text-base">
                {isLoading ? 'Submitting...' : 'Submit Quote Request'}
              </Button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

export default GetQuote;