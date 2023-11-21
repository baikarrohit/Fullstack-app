import { useRouter } from "next/router";

const Developer = () => {
  const router = useRouter();

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const { developerId } = router.query;

  const developer = details.find(
    (member) => member.id === parseInt(developerId)
  );

  if (!developer) {
    return <p>Developer Doesn't exist</p>;
  }

  return (
    <div>
      <h1>{developer.name}</h1>
      <p>{developer.role}</p>
    </div>
  );
};

export default Developer;
