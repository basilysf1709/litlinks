export default function Card() {
    return (
      <div className="mr-6 max-w-sm bg-white rounded-lg shadow hover:scale-105">
        <div className="w-64 max-w-xs overflow-hidden rounded-lg scale shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <a href="#">
            <img className="rounded-t-lg w-64 h-84" src="/bookCover.jpeg" alt="" />
        </a>
        {/* <div className="p-3">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">My Book</h5>
            </a>
            <p className="mb-1 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions.</p>
        </div> */}
        </div>
      </div>)
}