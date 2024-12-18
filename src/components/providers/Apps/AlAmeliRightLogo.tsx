import Image from "next/image";
import Link from "next/link";

//Assets
import alAmeliRightLogo from "@/assets/images/svgs/ali-alameli-logo-right.svg";

//Constants
import { PATHS } from "@/common/constants";

export const AlAmeliRightLogo = () => {
  return (
    <Link href={PATHS.HOME} className="w-fit block">
      <Image className="hidden lg:block" src={alAmeliRightLogo} alt="Logo" />
    </Link>
  );
};
