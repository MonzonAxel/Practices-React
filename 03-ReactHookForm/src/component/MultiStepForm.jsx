import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const MultiStepForm = () => {
  const { control, handleSubmit, formState: { errors }, setValue } = useForm();
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Step 1: Datos personales',
      fields: [
        { name: 'firstName', label: 'First Name', type: 'text', rules: { required: 'First name is required' } },
        { name: 'lastName', label: 'Last Name', type: 'text', rules: { required: 'Last name is required' } },
      ],
    },
    {
      title: 'Step 2: Información de contacto',
      fields: [
        { name: 'email', label: 'Email', type: 'email', rules: { required: 'Email is required', pattern: { value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, message: 'Invalid email' } } },
        { name: 'phone', label: 'Phone', type: 'tel', rules: { required: 'Phone is required' } },
      ],
    },
    {
      title: 'Step 3: Confirmación',
      fields: [
        { name: 'confirm', label: 'Confirm', type: 'checkbox', rules: { required: 'You must confirm' } },
      ],
    },
  ];

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onSubmit = (data) => {
    if (currentStep === steps.length - 1) {
      console.log('Form data:', data);
    } else {
      nextStep();
    }
  };

  return (
    <div style={{ width: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{steps[currentStep].title}</h2>

        {steps[currentStep].fields.map((field) => (
          <div key={field.name} style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>{field.label}</label>
            <Controller
              name={field.name}
              control={control}
              rules={field.rules}
              render={({ field }) => (
                <input
                  {...field}
                  type={field.type}
                  style={{ width: '100%', padding: '8px', fontSize: '14px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
              )}
            />
            {errors[field.name] && <span style={{ color: 'red', fontSize: '12px' }}>{errors[field.name].message}</span>}
          </div>
        ))}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          {currentStep > 0 && (
            <button
              type="button"
              onClick={prevStep}
              style={{
                backgroundColor: '#ccc',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Previous
            </button>
          )}
          <button
            type="submit"
            style={{
              backgroundColor: '#007BFF',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
