import Image from "next/image";
import Link from "next/link";

//Assets
import alAmeliLeftLogo from "@/assets/images/svgs/ali-alameli-logo-left.svg";

//Constants
import { PATHS } from "@/common/constants";

export const AlAmeliLeftLogo = () => {
  return (
    <Link href={PATHS.HOME} className="flex justify-end lg:hidden">
      <Image className="w-[50vw]" src={alAmeliLeftLogo} alt="Logo" />
    </Link>
  );
};
