import { useState } from 'react';
import { Upload, CheckCircle2, ArrowLeft } from 'lucide-react';
import BgImage from "../assets/images/background.jpg"; 
import TruckImage from "../assets/images/truck.jpeg"; 

function Button({ 
  children, 
  onClick, 
  type = 'button', 
  disabled = false, 
  className = '',
  variant = 'primary'
}) {
  const baseStyles = 'px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer';
  
  const variants = {
    primary: 'bg-green-600 hover:bg-green-700 text-white disabled:bg-gray-400',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-900'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

function Checkbox({ 
  id, 
  checked, 
  onChange, 
  label 
}) {
  return (
    <div className="flex items-start gap-3">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-5 h-5 mt-1 cursor-pointer accent-green-500 rounded"
      />
      <label htmlFor={id} className="text-sm text-gray-700 cursor-pointer">
        {label}
      </label>
    </div>
  );
}

function GetQuoteForm({ onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    address: '',
    details: '',
    file: null,
    termsAccepted: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        file,
      }));
      setFileName(file.name);
    }
  };

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({
      ...prev,
      termsAccepted: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.termsAccepted) {
      alert('Please fill in all required fields and accept the terms.');
      return;
    }

    setIsLoading(true);

    try {
      // ✅ Web3Forms JSON format use karo
      const payload = {
        access_key: '29b9f208-ddb8-4b75-afe3-7676e0c13aeb', //  Apni key yahan daalo
        subject: 'New Quote Request from ' + formData.name,
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        details: formData.details,
      };

      // ✅ Web3Forms endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
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
            Our team will be in contact shortly with a price quote or any pertinent questions that will allow us to give you such a quote. We will attempt to provide your quote same-day or within 24 to 48 hours.
          </p>
          <Button onClick={() => window.location.href = '/'}>Return to Home Page</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mt-[70px] py-6.5 px-3">
          Get a{" "}
          <span className="bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
            Quote
          </span>
          <span className='text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 mt-[70px] mb-6 px-2'></span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w mx-auto px-4 py-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {/* Info Text */}
            <div className="mb-8 space-y-4">
              <p className="text-gray-700">
                By working directly with manufacturers both domestic (US) and internationally without brokers and without inflated shipping and handling fees, you can typically reduce your hardware at 30% to 50% less than working with other distribution providers.
              </p>
              <p className="text-gray-700">
                To receive a quote for your solar hardware, please complete the form below. Our best pricing typically is for batteries, inverters and solar panels. You may either upload a BOM for any given project and we will respond with pricing from the BOM where we can provide the lowest pricing, or you can manually enter precisely the items you need.
              </p>
              <p className="text-gray-700">
                In the field below, please also specify if you wish for our quote to include shipping, if you require U.S. domestic and/or FEOC compliant hardware or any other special instructions.
              </p>
            </div>

            {/* File Upload Section */}
            <div className="mb-8">
              <label htmlFor="file-input" className="w-full bg-green-500 text-white text-center py-2 px-4 rounded-md cursor-pointer hover:bg-green-600 transition-colors flex items-center justify-center">
                <Upload className="mr-2" />
                Upload File
              </label>
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-input"
                accept=".pdf,.xlsx,.xls,.csv,.doc,.docx"
              />
              {fileName && <p className="text-sm text-gray-600 mt-2">Selected file: {fileName}</p>}
            </div>

            {/* Request Details */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Or enter details of your request in the field below
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                placeholder="Enter your project details, equipment specifications, or any special requirements..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                rows={6}
              />
            </div>
          </div>

          <div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <img src={TruckImage} alt="Shipping Truck" className="mx-auto mb-2" />
              <p className="text-sm text-gray-600">Lowest possible shipping cost with no handling fees</p>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ship to address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <Checkbox
              id="terms"
              checked={formData.termsAccepted}
              onChange={handleCheckboxChange}
              label={
                <>
                  I give Green Raven permission to contact me including the ability to opt out at any time per our{' '}
                  <a
                    href="/terms-of-use" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-semibold underline"
                  >
                    Terms and Conditions
                  </a>
                  . Note: Green Raven will never share your contact information with a third party without your permission.
                </>
              }
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              disabled={!formData.termsAccepted || isLoading}
              className="px-8 py-2"
            >
              {isLoading ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default GetQuoteForm;