import Card from "@/components/Card";
import AddCard from "@/components/AddCard";


export default function Booklist() {
    return (
        <>
            <h2 className="mt-12 ml-12 text-3xl tracking-tight leading-none text-gray-900">Horror</h2>
            <hr className="h-px my-8 bg-blue-800 border"></hr>
            <div className="flex no-scrollbar overflow-x-scroll pb-10">
                <div className="flex flex-nowrap lg:ml-6 md:ml-6 ml-6">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <AddCard />
            </div>
            </div>
            <hr className="h-px bg-blue-800 border"></hr>
        </>
    )
}