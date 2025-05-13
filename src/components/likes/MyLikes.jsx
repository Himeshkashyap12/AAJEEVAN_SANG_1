import { Link } from "react-router-dom";
import ProfileCard from "../common/profile/ProfileCard";

const MyLikes = ({ myLikes }) => {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        {myLikes?.map((item) => {
          return (
            <>
            <Link to={`/likes-details`}>
              <ProfileCard />
              </Link>
            </>
          )
        })}
      </div>
    </>
  )
}
export default MyLikes;