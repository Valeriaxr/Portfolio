


const projects = [

    {
      name: "Travel Makers",
      description:
      "Travel Makers is dedicated to simplifying travel planning and organization, providing users with an easy-to-use interface for creating custom itineraries that include flights, hotels, and activities.",
      tags: [
        {
          name: "Redux",
        },
        {
          name: "FastAPI",
        },
        {
          name: "CSS",
        },
      ],
    //   image: tripguide,
      source_code_link: "https://github.com/Valeriaxr/travel-makers",
    },

  {
    name: "Luxe Cars",
    description:
    "Our car dealership app is designed to streamline the car buying process, providing customers with access to our expert technicians and a wide selection of models to choose from. With our app, you can easily browse and compare models, schedule appointments with our technicians, and receive notifications for service updates.",
    tags: [
      {
        name: "React",
      },
      {
        name: "Django",
      },
      {
        name: "Rest API",
      },
    ],
    source_code_link: "https://github.com/Valeriaxr/Luxe-Cars",
  },


  {
    name: "Salty",
    description:
      "Salty is a cutting-edge application that brings the beach to you, wherever you are in the world. With Salty, you can access live webcams of your favorite beaches, providing a real-time window into the sand, surf, and sunshine. The application allows users to review and rate beaches based on their experiences, sharing tips and insights with other beachgoers. Users can also upload photos of the beach, providing a visual glimpse of the destination and giving others a better understanding of what to expect.",
    tags: [
      {
        name: "React",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "FastAPI",
      },
    ],
  //   image: jobit,
    source_code_link: "https://github.com/Valeriaxr/salty",
  },
];



  if (!Array.isArray(projects)) {
    console.error('projects is not an array');
  }

export default projects;
