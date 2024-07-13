const comment = (props) => {
  return (
    <div className="flex min-h-16 items-start gap-4 mt-4 mb-4">
      <img
        className="w-[33px] h-[33px] rounded-full mt-4"
        src={props.photo_url}
        alt={props.name}
      />
      <div className="flex flex-col self-start gap-1">
        <div className="flex gap-4 text-center items-center">
          <p className="font-semibold text-lg">{props.name}</p>
          <p className="font-light">{props.title}</p>
        </div>
        <p>{props.comment}</p>
      </div>
    </div>
  )
}

export default comment
