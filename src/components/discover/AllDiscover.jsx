import ProfileCard from "../common/ProfileCard";
import ProfileDetails from "../common/ProfileDetails"
const AllDiscover=({allDiscover})=>{
    return(
        <>
        <div className="w-[80%] ps-[50px] pe-[20px] flex flex-col gap-[20px] ">
        {allDiscover?.map((item)=>{
            return(
                <>
                  <ProfileCard />
                </>
            )
        })}
          </div>
        </>
    )
}
export default AllDiscover;