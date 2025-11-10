// News data - update this file to add new news items
const newsData = [
  {
    date: "Sep 2025",
    title: "New publication accepted at NeurIPS!",
    description: "Our paper on multimodal AI for pathology diagnosis has been accepted for presentation at the conference (THIS IS A SAMPLE)."
  },
  {
    date: "Aug 2025", 
    title: "We welcomed new PhD students to the lab",
    description: "Three new graduate students joined our research group to work on computational biology projects (THIS IS A SAMPLE)."
  },
  {
    date: "Jun 2025",
    title: "Our PI received an NIH award for multimodal AI research", 
    description: "The $2M grant will support our work on integrating imaging and genomic data for cancer research (THIS IS A SAMPLE)."
  }
];

// Function to render news items
function renderNews() {
  const newsContainer = document.getElementById('news-container');
  if (!newsContainer) return;

  let newsHTML = '';
  newsData.forEach(item => {
    newsHTML += `
      <div class="mb-3">
        <h6 class="mb-1"><strong>${item.date}</strong> – ${item.title}</h6>
        <p class="mb-0 small text-muted">${item.description}</p>
      </div>
    `;
  });
  
  newsContainer.innerHTML = newsHTML;
}

// Load news when page loads
document.addEventListener('DOMContentLoaded', renderNews);
