import profileImg from "./Mahesh.jpeg";

export default function Header() {
  return (
    <header class="profile-header">
      <a
        href="https://www.linkedin.com/in/mahesh-a-893a3116a/"
        target="_blank"
        rel="noopener noreferrer"
        class="linkedin-link"
      >
        LinkedIn
      </a>

      <h1 class="profile-name">Mahesh Anduri</h1>
      <img
        src={profileImg}
        alt="Mahesh in formal outfit smiling at camera"
        class="profile-image"
      />
    </header>
  );
}
