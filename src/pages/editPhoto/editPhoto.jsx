const index = () => {
    return(
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
          <div className="flex w-3/4 gap-10">
            <img className="w-1/2 " src="https://s3-alpha-sig.figma.com/img/a786/2648/e76566c8ea958242579a2bd747df51cd?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UPpqXhNmIilRPAlczEOLE3u--A5GH-rwk06KYrSvjQKYyR5xtdTD2e5GWHFiFHqK-kfBw8lK9ry3W~F0lY2xXODdGwodNIP-5-IIfezctd0U7fiyCzclpxw~ORWWh7ppARnOQtsG3MAEbsy4AxJCr2RYfkOco0dnC7fL~ARTQAb7wjTbofLOs3y9MTC-1JQVO1CHJ0mdaA90B63NSEwoPbRrazy6iRSg8QZf9Z2roI57vzkvfCl1VOJfqyGvDSka~fm7xMpLS4BzRvDHoIichRfaqEQezoYscK8jN63385EPLsE688l04LC-6pcxrzGwLAbao3DbL7k7ur-woHlHmQ__"
            alt="Green Field" />
          
          <div className="w-1/2 p-8 flex flex-col justify-between">
          <div>
            <span className="bg-gradient-to-r from-red-600 from-25% to-red-400 to-75% text-white text-sm font-semibold px-6 py-1 rounded-br-lg inline-block mb-2">
              Nature
            </span>
            <h2 className="text-2xl font-bold mb-2">Green Field</h2>
            <p className="text-gray-700 mb-4">
              step into a world where the whispering winds and rustling leaves compose a symphony of tranquility.
            </p>
            <div className="flex items-center mb-4">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src="https://s3-alpha-sig.figma.com/img/38e8/50ae/ea5c0bfc405b8bbadaa00931ac084a74?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jnHCzozz5kk8Gf2D7TXYDVFpzsUcwm1IZ9Ij8nAztvjMiXdqa5XDmM3K8oKYU8rhOCGTeA7NemzELMqs5EXNcKawZAOf5ueZYurqEcHWftBC1UK7r-s~HlkRN~pJTu8xTjOCqNkVKQVE50j7AeyXim74D~dFkrfHPOTGi~wn4KiIWeikxKCF08rgI3ikR0p-toYWyp~qj4sfwcQ7tEpGx3Z3CNZkxEPx-6MQHzZtAO2rga~szI0ErJUpZfKZt0Ckfvzf~VbAFs02dWVcpId0HyhXXoeXWbUHd-33y2G6DcRB5fV-2MQluu~yMm4Qq4sdiJqG~0DIj~yfMwzB2RrnnA__" // Replace this with the correct path to the profile image
                alt="Photographer"
              />
              <div>
                <span className="text-gray-700 font-semibold">Sumanri G</span>
                <span className="block text-gray-500 text-sm">Photography</span>
              </div>
            </div>
          </div>
          <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 focus:outline-none">
            <span className="flex items-center justify-center gap-2">
            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2058 15.205L12.7152 4.08465H13.4534C13.7561 4.08465 14 3.82599 14 3.51411C14 3.20223 13.7561 2.93578 13.4534 2.93578H10.2266V1.79503C10.2266 0.70717 9.5105 0 8.37347 0H5.61172C4.47438 0 3.76551 0.707495 3.76551 1.7947V2.93578H0.553863C0.258658 2.93578 0 3.2019 0 3.51411C0 3.82567 0.258343 4.08465 0.553863 4.08465H1.29235L1.80147 15.2128C1.85314 16.3081 2.55445 17 3.61807 17H10.3892C11.4449 17 12.1538 16.3003 12.2055 15.2053M4.94696 1.87097C4.94696 1.43738 5.25729 1.13329 5.70025 1.13329H8.29219C8.74271 1.13329 9.05273 1.43738 9.05273 1.87097V2.93578H4.94696V1.87097ZM3.72865 15.8592C3.30018 15.8592 2.98292 15.5243 2.96087 15.0836L2.44418 4.08465H11.5335L11.0464 15.0833C11.0243 15.5321 10.714 15.8589 10.2783 15.8589L3.72865 15.8592ZM9.19292 14.5205C9.43646 14.5205 9.6214 14.3151 9.62864 14.0259L9.85013 5.99359C9.85737 5.70475 9.66551 5.49152 9.41441 5.49152C9.18568 5.49152 8.9935 5.71221 8.98594 5.98612L8.76477 14.0259C8.75721 14.2998 8.94183 14.5205 9.19292 14.5205ZM4.81432 14.5205C5.06542 14.5205 5.24972 14.2998 5.24248 14.0259L5.021 5.98612C5.01343 5.71221 4.81432 5.49152 4.58528 5.49152C4.33418 5.49152 4.14956 5.70475 4.15681 5.99359L4.38585 14.0259C4.39341 14.3151 4.57047 14.5205 4.81432 14.5205ZM7.45037 14.0259V5.98612C7.45037 5.71221 7.25094 5.49152 7.00709 5.49152C6.76355 5.49152 6.55656 5.71221 6.55656 5.98612V14.0259C6.55656 14.2998 6.76355 14.5205 7.00709 14.5205C7.24338 14.5205 7.45037 14.2998 7.45037 14.0259Z" fill="white"/>
            </svg>
              Delete Photo
            </span>
            </button>
          </div>
        </div> 
        {/* Your other post */}
        <div className="mt-10">
          <h1 className="text-2xl font-bold text-center">Your other post</h1>
          <div className="flex gap-7">
            <div>
          <img className="w-48 h-60 object-cover rounded-lg mb-2" src="https://s3-alpha-sig.figma.com/img/99ff/401e/3fb949db711b7240cf878546cb823717?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K0GV0aNPms2Gy2b4x0j4zkvh1hhMnUM1SrjcPGutE7ixsa02vpS69IDf6I6Dd5ZJlDqKPWMpwdUEMYUvSpDI3ATF47XgGd~2BfDDjMp-yudqDz5xEOOb5FAFul-7OQEU1xAUaVD~x7IVfAh5WXyYTLxnXpiT28bpEZ8WxLwdDqe9QlxxJXv8UHqNnWml8RuRLPfarrLRM2hfr5Ygs8turofb0xnsY-WT0oIgqXtlaN7jehDEm04g7~Md3n10OdvVEjLE~wHk0DTmqchP3S0x~uw2evU7u8SMbZyQwrvA8GYrkV7weZ9AGch5UzQ~5ovdS5nIKg24V4QNvMdZUhObuw__" alt="" />
          <div className="flex items-center mb-4">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src="https://s3-alpha-sig.figma.com/img/38e8/50ae/ea5c0bfc405b8bbadaa00931ac084a74?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jnHCzozz5kk8Gf2D7TXYDVFpzsUcwm1IZ9Ij8nAztvjMiXdqa5XDmM3K8oKYU8rhOCGTeA7NemzELMqs5EXNcKawZAOf5ueZYurqEcHWftBC1UK7r-s~HlkRN~pJTu8xTjOCqNkVKQVE50j7AeyXim74D~dFkrfHPOTGi~wn4KiIWeikxKCF08rgI3ikR0p-toYWyp~qj4sfwcQ7tEpGx3Z3CNZkxEPx-6MQHzZtAO2rga~szI0ErJUpZfKZt0Ckfvzf~VbAFs02dWVcpId0HyhXXoeXWbUHd-33y2G6DcRB5fV-2MQluu~yMm4Qq4sdiJqG~0DIj~yfMwzB2RrnnA__" // Replace this with the correct path to the profile image
                alt="Photographer"
              />
               <div>
                <span className="text-gray-700 font-semibold">Sumanri G</span>
                <span className="block text-gray-500 text-sm">Photography</span>
               </div>
             </div> 
            </div>
            <div>
          <img className="w-48 h-60 object-cover rounded-lg mb-2" src="https://s3-alpha-sig.figma.com/img/99ff/401e/3fb949db711b7240cf878546cb823717?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K0GV0aNPms2Gy2b4x0j4zkvh1hhMnUM1SrjcPGutE7ixsa02vpS69IDf6I6Dd5ZJlDqKPWMpwdUEMYUvSpDI3ATF47XgGd~2BfDDjMp-yudqDz5xEOOb5FAFul-7OQEU1xAUaVD~x7IVfAh5WXyYTLxnXpiT28bpEZ8WxLwdDqe9QlxxJXv8UHqNnWml8RuRLPfarrLRM2hfr5Ygs8turofb0xnsY-WT0oIgqXtlaN7jehDEm04g7~Md3n10OdvVEjLE~wHk0DTmqchP3S0x~uw2evU7u8SMbZyQwrvA8GYrkV7weZ9AGch5UzQ~5ovdS5nIKg24V4QNvMdZUhObuw__" alt="" />
          <div className="flex items-center mb-4">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src="https://s3-alpha-sig.figma.com/img/38e8/50ae/ea5c0bfc405b8bbadaa00931ac084a74?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jnHCzozz5kk8Gf2D7TXYDVFpzsUcwm1IZ9Ij8nAztvjMiXdqa5XDmM3K8oKYU8rhOCGTeA7NemzELMqs5EXNcKawZAOf5ueZYurqEcHWftBC1UK7r-s~HlkRN~pJTu8xTjOCqNkVKQVE50j7AeyXim74D~dFkrfHPOTGi~wn4KiIWeikxKCF08rgI3ikR0p-toYWyp~qj4sfwcQ7tEpGx3Z3CNZkxEPx-6MQHzZtAO2rga~szI0ErJUpZfKZt0Ckfvzf~VbAFs02dWVcpId0HyhXXoeXWbUHd-33y2G6DcRB5fV-2MQluu~yMm4Qq4sdiJqG~0DIj~yfMwzB2RrnnA__" // Replace this with the correct path to the profile image
                alt="Photographer"
              />
               <div>
                <span className="text-gray-700 font-semibold">Sumanri G</span>
                <span className="block text-gray-500 text-sm">Photography</span>
               </div>
             </div> 
            </div>
            <div>
          <img className="w-48 h-60 object-cover rounded-lg mb-2" src="https://s3-alpha-sig.figma.com/img/99ff/401e/3fb949db711b7240cf878546cb823717?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K0GV0aNPms2Gy2b4x0j4zkvh1hhMnUM1SrjcPGutE7ixsa02vpS69IDf6I6Dd5ZJlDqKPWMpwdUEMYUvSpDI3ATF47XgGd~2BfDDjMp-yudqDz5xEOOb5FAFul-7OQEU1xAUaVD~x7IVfAh5WXyYTLxnXpiT28bpEZ8WxLwdDqe9QlxxJXv8UHqNnWml8RuRLPfarrLRM2hfr5Ygs8turofb0xnsY-WT0oIgqXtlaN7jehDEm04g7~Md3n10OdvVEjLE~wHk0DTmqchP3S0x~uw2evU7u8SMbZyQwrvA8GYrkV7weZ9AGch5UzQ~5ovdS5nIKg24V4QNvMdZUhObuw__" alt="" />
          <div className="flex items-center mb-4">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src="https://s3-alpha-sig.figma.com/img/38e8/50ae/ea5c0bfc405b8bbadaa00931ac084a74?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jnHCzozz5kk8Gf2D7TXYDVFpzsUcwm1IZ9Ij8nAztvjMiXdqa5XDmM3K8oKYU8rhOCGTeA7NemzELMqs5EXNcKawZAOf5ueZYurqEcHWftBC1UK7r-s~HlkRN~pJTu8xTjOCqNkVKQVE50j7AeyXim74D~dFkrfHPOTGi~wn4KiIWeikxKCF08rgI3ikR0p-toYWyp~qj4sfwcQ7tEpGx3Z3CNZkxEPx-6MQHzZtAO2rga~szI0ErJUpZfKZt0Ckfvzf~VbAFs02dWVcpId0HyhXXoeXWbUHd-33y2G6DcRB5fV-2MQluu~yMm4Qq4sdiJqG~0DIj~yfMwzB2RrnnA__" // Replace this with the correct path to the profile image
                alt="Photographer"
              />
               <div>
                <span className="text-gray-700 font-semibold">Sumanri G</span>
                <span className="block text-gray-500 text-sm">Photography</span>
               </div>
             </div> 
            </div>
            <div>
          <img className="w-48 h-60 object-cover rounded-lg mb-2" src="https://s3-alpha-sig.figma.com/img/99ff/401e/3fb949db711b7240cf878546cb823717?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K0GV0aNPms2Gy2b4x0j4zkvh1hhMnUM1SrjcPGutE7ixsa02vpS69IDf6I6Dd5ZJlDqKPWMpwdUEMYUvSpDI3ATF47XgGd~2BfDDjMp-yudqDz5xEOOb5FAFul-7OQEU1xAUaVD~x7IVfAh5WXyYTLxnXpiT28bpEZ8WxLwdDqe9QlxxJXv8UHqNnWml8RuRLPfarrLRM2hfr5Ygs8turofb0xnsY-WT0oIgqXtlaN7jehDEm04g7~Md3n10OdvVEjLE~wHk0DTmqchP3S0x~uw2evU7u8SMbZyQwrvA8GYrkV7weZ9AGch5UzQ~5ovdS5nIKg24V4QNvMdZUhObuw__" alt="" />
          <div className="flex items-center mb-4">
              <img
                className="w-8 h-8 rounded-full mr-2"
                src="https://s3-alpha-sig.figma.com/img/38e8/50ae/ea5c0bfc405b8bbadaa00931ac084a74?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jnHCzozz5kk8Gf2D7TXYDVFpzsUcwm1IZ9Ij8nAztvjMiXdqa5XDmM3K8oKYU8rhOCGTeA7NemzELMqs5EXNcKawZAOf5ueZYurqEcHWftBC1UK7r-s~HlkRN~pJTu8xTjOCqNkVKQVE50j7AeyXim74D~dFkrfHPOTGi~wn4KiIWeikxKCF08rgI3ikR0p-toYWyp~qj4sfwcQ7tEpGx3Z3CNZkxEPx-6MQHzZtAO2rga~szI0ErJUpZfKZt0Ckfvzf~VbAFs02dWVcpId0HyhXXoeXWbUHd-33y2G6DcRB5fV-2MQluu~yMm4Qq4sdiJqG~0DIj~yfMwzB2RrnnA__" // Replace this with the correct path to the profile image
                alt="Photographer"
              />
               <div>
                <span className="text-gray-700 font-semibold">Sumanri G</span>
                <span className="block text-gray-500 text-sm">Photography</span>
               </div>
             </div> 
            </div>
          </div>
            {/* other posts end */}
        </div> 
       </div>
        
    )
};

export default index;