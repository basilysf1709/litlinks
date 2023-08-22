export default function Card() {
    return (
      <div className="w-48 md:w-56 lg:w-64 h-62 md:h-70 lg:h-78 mr-8 bg-white rounded-lg shadow hover:scale-105">
        <div className="h-full w-full max-w-xs overflow-hidden rounded-lg scale shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <a href="#">
            <img className="h-full w-full rounded-t-lg" src="/bookCover.jpeg" alt="" />
        </a>
        </div>
      </div>)
}