import { Link } from "react-router-dom";
import ProfileCard from "../common/profile/ProfileCard";

const SelectedDiscover = ({ allSelected }) => {
  return (
    <>
      <div className="flex flex-col gap-[20px]">
        {allSelected?.map((item) => {
          return (
            <>
              <Link to={`/discover-details`}>
                <ProfileCard />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};
export default SelectedDiscover;
