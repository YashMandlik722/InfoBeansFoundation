import "../components/Items.css";

const facilities = [
  {
    title: "School Bus",
    description: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit.",
    icon: "fa-bus-alt",
    color: "primary",
    delay: "0.1s",
  },
  {
    title: "Playground",
    description: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit.",
    icon: "fa-futbol",
    color: "success",
    delay: "0.3s",
  },
  {
    title: "Healthy Canteen",
    description: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit.",
    icon: "fa-home",
    color: "warning",
    delay: "0.5s",
  },
  {
    title: "Positive Learning",
    description: "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit.",
    icon: "fa-chalkboard-teacher",
    color: "info",
    delay: "0.7s",
  },
];

export default function Items() {
  return (
    <div className="container-xxl py-5 bg-light">
      <div className="container">
        <div className="text-center mx-auto mb-5 fade-in" style={{ maxWidth: "600px" }}>
          <h1 className="mb-3 text-danger">Foundation Facilities</h1>
          <p className="text-danger">
            Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
            eirmod sit. Ipsum diam justo sed rebum vero dolor duo.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 fade-up"
              style={{ animationDelay: facility.delay }}
            >
              <div className="facility-item">
                <div className={`facility-icon bg-${facility.color}`}>
                  <i className={`fa ${facility.icon} fa-3x text-white`}></i>
                </div>
                <div className="facility-text">
                  <h3 className={`text-${facility.color} mb-3`}>{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
