const menukill = () => {
  const mobilenav = document.getElementById('mobilenav');
  if (mobilenav) {
    mobilenav.style.width = '0';
  }

  const main = document.getElementById('main');
  if (main) {
    main.style.marginLeft = '0';
  }

  document.body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
};

const closeMenu = () => {
  menukill();
};

const menuopen = () => {
  const mobilenav = document.getElementById('mobilenav');
  if (mobilenav) {
    mobilenav.style.width = '100%';
  }

  const main = document.getElementById('main');
  if (main) {
    main.style.marginLeft = '250px';
  }

  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
};

const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', menuopen);
}

const closeMenuLinks = document.querySelectorAll('.close-menu');
if (closeMenuLinks) {
  closeMenuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}

// Featured Speakers
// Speakers array
const speakers = [
  {
    name: 'Mark Williams',
    qualification: 'Masters in Instructional Design',
    background: 'Seasoned instructional designer with expertise in developing innovative learning solutions.',
    imageSrc: 'images/human1.svg',
  },
  {
    name: 'Dr. Sophia Lee',
    qualification: 'PhD in Education Technology',
    background: 'Experienced researcher and educator specializing in the intersection of technology and learning.',
    imageSrc: 'images/human2.svg',
  },
  {
    name: 'Dr. Robert Chen',
    qualification: 'Doctorate in Artificial Intelligence',
    background: 'Renowned AI researcher and advocate for leveraging technology to enhance educational access and equity.',
    imageSrc: 'images/human3.svg',
  },
  {
    name: 'Sarah Johnson',
    qualification: 'Masters in Educational Psychology',
    background: 'Accomplished educational psychologist with a deep understanding of learner engagement and motivation.',
    imageSrc: 'images/human4.svg',
  },
  {
    name: 'Michael Thompson',
    qualification: 'PhD in Education Technology',
    background: 'Extensive experience in developing AI-powered tutoring systems',
    imageSrc: 'images/human1.svg',
  },
  {
    name: 'David Mitchell',
    qualification: 'Masters in Computer Science',
    background: 'Specializes in educational game development and immersive learning experiences',
    imageSrc: 'images/human3.svg',
  },
];

// Dynamic HTML
// Function to create the HTML dynamically for each speaker
const createSpeakerHTML = (speaker) => {
  const speakerHTML = `
    <div class='speakers-main'>
      <img class='speakers-img' src='${speaker.imageSrc}' alt='image of speaker'>
      <div class='speakers-info'>      
        <h5 class='speakers-name'>${speaker.name}</h5>
        <p class='speakers-qualification'>${speaker.qualification}</p>
        <p class='speakers-background'>${speaker.background}</p>
      </div>
    </div>
  `;
  return speakerHTML;
};

// Add the dynamic HTML to the HTML section
const addSpeakersToPage = () => {
  const featuredSpeakersSection = document.getElementById('featured-speakers-section');
  console.log(featuredSpeakersSection);
  const speakersContainer = document.getElementById('speakers-container');
  let speakersHTML = '';
  let cuurentSpeakers = 2;
  let allSpeakers;

  // Update visibility of speakers
  const updateVisibility = () => {
    for (let i = 0; i < allSpeakers.length; i += 1) {
      if (i < cuurentSpeakers) {
        allSpeakers[i].style.display = 'flex';
      } else {
        allSpeakers[i].style.display = 'none';
      }
    }
  };

  // Iterate through each speaker in the data and create the HTML
  for (let i = 0; i < speakers.length; i += 1) {
    speakersHTML += createSpeakerHTML(speakers[i]);
  }
  speakersContainer.innerHTML = speakersHTML;

  // Get all speaker elements
  allSpeakers = speakersContainer.getElementsByClassName('speakers-main');

  // Screen size display
  const screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
    // Show all speakers on desktop
    for (let i = 0; i < allSpeakers.length; i += 1) {
      allSpeakers[i].style.display = 'flex';
    }
  } else {
    // Only speakers on mobile
    updateVisibility();
  }

  // Listener to more button
  const seeMoreButton = document.getElementById('see-more-button');
  if (screenWidth < 768) {
    seeMoreButton.style.display = 'block';
    seeMoreButton.addEventListener('click', () => {
      cuurentSpeakers += 2;
      updateVisibility();
    });
  } else {
    seeMoreButton.style.display = 'none';
  }
};

document.addEventListener('DOMContentLoaded', addSpeakersToPage);
window.addEventListener('resize', addSpeakersToPage);
