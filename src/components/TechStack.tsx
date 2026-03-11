import { profile } from "../data/profile";

const TechStack = () => {
  return (
    <div className="techstack section-container">
      <h2>My Tech Stack</h2>
      <div className="techstack-grid">
        {profile.techStack.map((group) => (
          <section className="techstack-card" key={group.title}>
            <h3>{group.title}</h3>
            <div className="techstack-tags">
              {group.items.map((item) => (
                <span className="techstack-tag" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
