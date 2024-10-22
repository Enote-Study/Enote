// Show or hide notes section with cards
function showNotes() {
    const notesContent = document.getElementById("notesContent");
  
    // If content already displayed, toggle visibility
    if (notesContent.style.display === "none") {
      notesContent.style.display = "flex";
    } else {
      notesContent.style.display = "none";
      return;
    }
  
    // Clear previous content
    notesContent.innerHTML = '';
  
    // Sample notes data
    const notes = [
      {
        title: "系統分析與設計ch1",
        date: "2024年10月20日",
        description: "Requirement",
        image: "assets/img/notes1.jpg"
      },
      {
        title: "系統分析與設計ch2",
        date: "2024年10月22日",
        description: "Process Modeling",
        image: "assets/img/notes2.jpg"
      },
      {
        title: "系統分析與設計ch3",
        date: "2024年10月24日",
        description: "Data Flow Diagram",
        image: "assets/img/notes3.jpg"
      }
    ];
  
    // Generate cards dynamically
    notes.forEach(note => {
      const card = `
        <div class="col-lg-4">
          <div class="card shadow-sm mb-4">
            <img src="${note.image}" class="card-img-top" alt="${note.title}">
            <div class="card-body">
              <h5 class="card-title">${note.title}</h5>
              <p class="card-text">${note.description}</p>
              <small class="text-muted">日期: ${note.date}</small>
            </div>
          </div>
        </div>`;
      notesContent.innerHTML += card;
    });
  }
  
  // Play or hide video section
  function playVideo() {
    const videoContent = document.getElementById("videoContent");
    if (videoContent.style.display === "none") {
      videoContent.style.display = "block";
    } else {
      videoContent.style.display = "none";
    }
  }
  
  // Show or hide schedule section
  function showSchedule() {
    const scheduleContent = document.getElementById("scheduleContent");
    if (scheduleContent.style.display === "none") {
      scheduleContent.style.display = "block";
    } else {
      scheduleContent.style.display = "none";
    }
  }
  
  // Show or hide discussion section
  function showDiscussion() {
    const discussionContent = document.getElementById("discussionContent");
    if (discussionContent.style.display === "none") {
      discussionContent.style.display = "block";
    } else {
      discussionContent.style.display = "none";
    }
  }
  
  // Submit discussion and display it in the discussion section
  function submitDiscussion() {
    const input = document.getElementById("discussionInput").value;
    if (input) {
      const post = document.createElement("p");
      post.textContent = input;
      document.getElementById
      ("discussionPosts").appendChild(post);
      document.getElementById("discussionInput").value = "";  // Clear input field after submission
    }
  }
    