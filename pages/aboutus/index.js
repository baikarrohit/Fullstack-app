import Link from "next/link";

const AboutUs = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <div>
      <h1>Welcome to AboutUS page.</h1>
      <ul>
        {details.map((ele) => (
          <li style={{ fontSize: "25px" }} key={ele.id}>
            <Link href={`/aboutus/${ele.id}`}>{ele.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUs;
