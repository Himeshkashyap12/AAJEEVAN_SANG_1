import { Link } from "react-router-dom";
import ProfileCard  from "../../components/common/profile/ProfileCard"

const LikesMe = ({ likesMe }) => {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        {likesMe?.map((item) => {
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
export default LikesMe;