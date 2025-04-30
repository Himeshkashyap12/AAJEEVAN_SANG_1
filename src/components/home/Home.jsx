import HomeProfile from "./HomeProfile";

const Home=()=>{
    return(
        <>
        <div className="flex flex-col gap-[24px]  py-[16px] ms-[60px] me-[20px] ">
        <HomeProfile heading={"New Profiles"}/>
        <HomeProfile heading={"All Matches"}/>
        <HomeProfile heading={"All Shortlist"}/>
        <HomeProfile heading={"All Connect Request"}/>
        </div>
        </>
    )
}
export default Home;