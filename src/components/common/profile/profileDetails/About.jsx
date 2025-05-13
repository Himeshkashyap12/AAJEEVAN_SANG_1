import CustomText from "../../../common/CustomText.jsx";
const About = () => {
  return (
      <div className="about ">
        <div
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          className="py-2 rounded-full w-[140px] flex justify-center items-center"
        >
          <CustomText text={"2. ABOUT"} />
        </div>
    
      <div className="flex flex-col gap-[16px] ps-[140px]">
        <CustomText className={"!text-[18px] !font-[400] !text-[#201913]"} text={"About me"} />
        <CustomText
          className={"!text-[14px] !font-[400] text-[#201913] w-[80%]"}
          text={
            "Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections. Lorem ipsum dolor sit amet consectetur. Adipiscing ipsum duis ante enim id semper."
          }
        />
      </div>
      </div>
  );
};
export default About;
