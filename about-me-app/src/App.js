import './App.css';

function App() {
  // 1. Personal Information Variables (10 points)
  const name = "Zach Wilson";
  const major = "Computer Science";
  const graduationYear = 2026;
  const hometown = "Oakland City, Indiana";

  // 2. Interests Array (10 points)
  const interests = [
    "Coding",
    "Gaming",
    "Reading",
    "Sports",
    "Music"
  ];

  // 3. Skills Object (10 points)
  const skills = {
    language1: "JavaScript",
    language2: "Python",
    language3: "Java"
  };
  
  // Using destructuring to extract skills
  const { language1, language2, language3 } = skills;

  // 4. Personal Statement using Template Literals (10 points)
  const personalStatement = `Hello! My name is ${name} and I'm studying ${major} at Oklahoma City University. I'm expected to graduate in ${graduationYear}. I'm from ${hometown} and I'm passionate about technology and innovation.`;

  // 5. Contact Information with Spread Operator (10 points)
  const basicContact = {
    email: "your.email@example.com",
    github: "yourgithubusername"
  };
  
  // Using spread operator to create a copy and add LinkedIn
  const fullContact = {
    ...basicContact,
    linkedin: "yourlinkedinprofile"
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>About Me</h1>
      </header>

      <main className="content">
        {/* Personal Information Section */}
        <section className="personal-info">
          <h2>Personal Information</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Major:</strong> {major}</p>
          <p><strong>Graduation Year:</strong> {graduationYear}</p>
          <p><strong>Hometown:</strong> {hometown}</p>
        </section>

        {/* Personal Statement Section */}
        <section className="personal-statement">
          <h2>About Me</h2>
          <p>{personalStatement}</p>
        </section>

        {/* Interests Section - Using .map() */}
        <section className="interests">
          <h2>My Interests</h2>
          <ul>
            {interests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </section>

        {/* Skills Section - Using Destructuring */}
        <section className="skills">
          <h2>My Skills</h2>
          <div className="skills-list">
            <p>🔹 {language1}</p>
            <p>🔹 {language2}</p>
            <p>🔹 {language3}</p>
          </div>
        </section>

        {/* Contact Information - Using Spread Operator */}
        <section className="contact">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> {fullContact.email}</p>
          <p><strong>GitHub:</strong> {fullContact.github}</p>
          <p><strong>LinkedIn:</strong> {fullContact.linkedin}</p>
        </section>
      </main>

      <footer>
        <p>© {graduationYear} {name}</p>
      </footer>
    </div>
  );
}

export default App;