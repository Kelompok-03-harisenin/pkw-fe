import Navbar from "../../components/navbar/index"
const index = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-row w-full max-w-4xl">
          <div className="relative">
            <img
              className="w-full h-full object-cover"
              src="https://s3-alpha-sig.figma.com/img/3fbf/cefc/fe509f1ec6a3ebf52e6916cf2c987ff2?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PbyO3rubQ1Y9~wIaLIXGxz3oOJde4fbjOqeMlbCziEXz0a~eG65sPSsiwTNLvjOJeiWhQ0vhobFbGQfGQccHe8Hreyuku00kULrTZWn8Zm5YViGOMAH3zr3VXNtG-yvlkA38YFZN-Ox~FAfD3JbbRKtVl-GendpCWP36NbBnuEJ7pEOGUVWsICb2uurR4PFs54U-HAxOAmSQvrwHXEltt8HhLPgheE5R~98YCRky~Tav33liOc8HBm8lzvWz1bNlA8XeZ9z1cKJd-xi92RvYUioV2~dYLwk2pOCpMavUcMMQmAPjIvHE2rTzWFzLZDwbEPa2eWr~7Ap0EtTfE1CwSQ__" // Make sure to replace this path with the correct path to your image
              alt="Green Leaf"
            />

          </div>
          <div className="p-20">
            <span className=" bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded-br-lg">
              Nature
            </span>
            <h2 className="text-2xl font-bold mb-2">Green Leaf</h2>
            <p className="text-gray-700 mb-4">
              step into a world where the whispering winds and rustling leaves compose a symphony of tranquility.
            </p>
            <div className="flex items-center mb-4">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src="https://s3-alpha-sig.figma.com/img/38e8/50ae/ea5c0bfc405b8bbadaa00931ac084a74?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jnHCzozz5kk8Gf2D7TXYDVFpzsUcwm1IZ9Ij8nAztvjMiXdqa5XDmM3K8oKYU8rhOCGTeA7NemzELMqs5EXNcKawZAOf5ueZYurqEcHWftBC1UK7r-s~HlkRN~pJTu8xTjOCqNkVKQVE50j7AeyXim74D~dFkrfHPOTGi~wn4KiIWeikxKCF08rgI3ikR0p-toYWyp~qj4sfwcQ7tEpGx3Z3CNZkxEPx-6MQHzZtAO2rga~szI0ErJUpZfKZt0Ckfvzf~VbAFs02dWVcpId0HyhXXoeXWbUHd-33y2G6DcRB5fV-2MQluu~yMm4Qq4sdiJqG~0DIj~yfMwzB2RrnnA__" // Replace this with the correct path to the profile image
                alt="Photographer"
              />
              <div className="flex flex-col">
                <span className="text-gray-700 font-semibold">Sumanri G</span>
                <span className="text-gray-500 ">Photography</span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-red-500 mr-2">
                <svg width="34" height="29" viewBox="0 0 34 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.3422 28.4134L17.3392 28.415C17.2351 28.4707 17.1185 28.5 17 28.5C16.8815 28.5 16.7649 28.4707 16.6608 28.415L16.6578 28.4134C16.3392 28.2455 12.2707 26.038 8.28932 22.5676C4.28127 19.0739 0.500138 14.4197 0.5 9.36707C0.502738 7.01697 1.44188 4.76343 3.11217 3.10094C4.78253 1.43837 7.04774 0.502728 9.41098 0.5C12.4001 0.500076 14.9916 1.77705 16.6008 3.91035L17 4.4395L17.3992 3.91035C19.0084 1.77705 21.5999 0.500077 24.589 0.5C26.9523 0.502728 29.2175 1.43837 30.8878 3.10094C32.5582 4.7635 33.4973 7.01716 33.5 9.36736C33.4997 14.4199 29.7187 19.074 25.7107 22.5676C21.7293 26.038 17.6608 28.2455 17.3422 28.4134Z" fill="#E60023" stroke="#E60023" />
                </svg>

              </span>
              <span className="text-gray-700 font-semibold">1 Likes</span>
            </div>
            <div className="mt-4">
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add a comment"
              />
            </div>
            <div className="mt-2 text-blue-500">
              <a href="#">See 5 Comment</a>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
};

export default index;
