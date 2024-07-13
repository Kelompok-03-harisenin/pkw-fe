import Comment from "./comment"

const commentsBox = (props) => {
  const apiData = props.apiData

  return (
    <div
      className="fixed top-0 m-0 z-10 flex justify-center items-center w-full min-h-full bg-[#0F0B0CAA]"
    >
      <div className="w-[500px] h-[600px] bg-white rounded-lg flex flex-col justify-center items-center">
        <button onClick={props.handleExit} className="relative ml-auto mr-4 font-extrabold bg-red-600 text-white w-[33px] h-[33px] rounded-full" type="button">X</button>
        <h2 className="text-center font-bold text-xl mb-4">Comments</h2>
        <div className="overflow-scroll overflow-x-hidden w-[450px] h-[500px]">
          {
            apiData.map(item => (
              < Comment key={item.id} name={item.userName} photo_url={item.userPicture} title={item.userTitle} comment={item.comment} />
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default commentsBox
