document.addEventListener('DOMContentLoaded', async function() {
  const faqContainer = document.querySelector('.faq-container');
  try {
      const response = await fetch('/api/faqs');
      const data = await response.json();

      if (data.success) {
          const faqs = data.data;
          faqs.forEach(faq => {
              const faqItem = document.createElement('div');
              faqItem.classList.add('faq-item');

              faqItem.innerHTML = `
                  <input type="checkbox" id="faq${faq.id}" class="faq-toggle">
                  <label for="faq${faq.id}" class="faq-question">
                      ${faq.question}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                      </svg>
                  </label>
                  <div class="faq-answer">
                      <p>${faq.answer}</p>
                  </div>
              `;
              faqContainer.appendChild(faqItem);
          });
      }
  } catch (error) {
      console.error('Error fetching FAQs:', error);
  }
});
