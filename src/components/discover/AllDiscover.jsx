import { Link } from "react-router-dom";
import ProfileCard from "../common/profile/ProfileCard";
const AllDiscover=({allDiscover})=>{
      return(
        <>
        <div className="flex flex-col gap-[20px] ">
        {allDiscover?.map((item,id)=>{
            return(
                <>
                <Link to={`/discover-details`} >
                  <ProfileCard />
                  </Link>
                </>
            )
        })}
          </div>
        </>
    )
}
export default AllDiscover;