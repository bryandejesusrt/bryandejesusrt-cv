import "./App.css";

function App() {
  return (
    <>
      <div className="max-w-4xl shadow-container-shadow rounded-md pb-16 my-12 bg-white mx-auto max-md:h-full max-sm:min-w-60">
        <div className="container grid grid-flow-row mx-auto pt-12 px-14 relative">
          <h1 className="font-sans font-medium text-4xl leading-10 text-black-text">
            Bryan De Jesùs Rosa <span className="md:block">Tavarez</span>
          </h1>
          <p className="mt-1 text-sm font-normal text-neutral-800">
            Sofware Developer, Frontend, Mobile
          </p>

          <div className="absolute top-10 right-12 mt-4 mr-4 flex flex-row gap-5 items-end">
            <svg
              className="p-1 cursor-pointer text-gray-400"
              width="25"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                className="c40us "
                d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
              ></path>
              <path
                className="cwnoo"
                d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
              ></path>
            </svg>
            <svg
              className="p-1 cursor-pointer text-gray-400"
              width="25"
              height="25"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                className="cwnoo"
                d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
              ></path>
              <path
                className="c4foe"
                d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="p-1 cursor-pointer text-gray-400"
              width="27"
              height="27"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full mt-10 mr-14 ml-14 max-w-md md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            <div className="col-span-2 md:col-span-2 w-full md:w-auto">
              {/* icon culumn */}
              <div className="grid grid-cols-1">
                <div className="col-span-1">
                  <div className="flex">
                    <div className="mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-6 text-gray-800"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-2">
                      <h3 className="text-xl font-bold text-gray-800">
                        Perfil profesional
                      </h3>
                      <p className="text-md text-left mt-2 text-gray-700 font-normal">
                        Desarrollador de software especializado en diseño de
                        interfaces para aplicaciones web y móviles, con
                        experiencia en tecnologías backend y bases de datos.
                        Proactivo, organizado y orientado al cambio. Apasionado
                        por aprender y aplicar habilidades técnicas,
                        comprometido con el éxito del equipo.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-1 pt-1  pl-8 w-full">
              {/* Datos personales */}

              <div className="gid grid-flow-row grid-rows-1 ">
                <div className="row-span-1">
                  <h2 className="text-md font-semibold pb-2 text-gray-800">
                    Datos Personales
                  </h2>
                  <a
                    href="https://www.google.com/maps/@18.7794617,-70.1752168,8.83z?entry=ttu"
                    target="blank"
                  >
                    <p className="text-sm leading-6 text-gray-700">
                      Distrito nacional, Santo Domingo.
                    </p>
                    <p className="text-sm leading-6 text-gray-700 ">
                      Republica Dominicana. &#127465;&#127476;
                    </p>
                  </a>
                  <p className="text-sm leading-6 text-gray-700">
                    <a href="tel:+18298895669" target="blank">
                      809-555-5555
                    </a>
                  </p>
                  <p className="text-sm leading-6 text-sky-600">
                    <a href="mailto:bryandejesus@gmail.com" target="blank">
                      bryandejesusrt@gmail.com
                    </a>
                  </p>
                </div>
                <div className="row-span-1">
                  <h2 className="text-md font-semibold pb-2 text-gray-800">
                    Competencias
                  </h2>
                  <p className="text-sm leading-6 text-gray-700">
                    Javascript : React JS, Tailwind
                  </p>
                  <p className="text-sm leading-6 text-gray-700">
                    Php : Laravel 8
                  </p>
                  <p className="text-sm leading-6 text-gray-700">
                    C# .NET Framework
                  </p>

                  <p className="text-sm leading-6 text-gray-700">
                    SQL Server, Oracle, MySQL
                  </p>
                  <p className="text-sm leading-6 text-gray-700">Flutter</p>
                  <p className="text-sm leading-6 text-gray-700">Python</p>
                </div>
                <div className="row-span-1">
                  <h2 className="text-md font-semibold pb-2 text-gray-800">
                    Idiomas
                  </h2>
                  <p className="text-sm leading-6 text-gray-700">
                    Español : Nativo
                  </p>
                  <p className="text-sm leading-6 text-gray-700">
                    Ingles : Intermedio A2
                  </p>
                </div>
                <div className="row-span-1">
                  <h2 className="text-md font-semibold pb-2 text-gray-800">
                    Links
                  </h2>
                  <a href="">LinkedIn</a>

                  <a href="">GitHub</a>
                </div>
                <div className="row-span-1">
                  <h2 className="text-md font-semibold pb-2 text-gray-800">
                    Hobbies
                  </h2>
                  <p className="text-sm leading-6 text-gray-700">
                    Leer, Auto educación, Ciclismo, Escuchar música, Turismo
                    interno, Basketball.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
