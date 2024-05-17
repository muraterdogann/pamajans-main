
async function submitContactForm(formData: FormData, type: string): Promise<string> {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }
  
      const responseData = await response.json();
      return responseData.message;
    } catch (err) {
      console.error(err);
      throw new Error('Failed to submit contact form');
    }
  }
  
  export { submitContactForm };
  