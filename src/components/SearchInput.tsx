import searchIcon from "@/public/entry/search.svg";
import scannerIcon from "@/public/entry/scanner.svg";
import Image from "next/image";

const SearchInput = ({
  setSearchValue,
  searchValue,
  setIsOn,
  placeholderText,
  isQr,
}) => {
  const borderBT = searchValue ? "border-b-black" : "border-b-gray-4 ";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div
      className={`flex items-center justify-center gap-[0.8rem] border-b-[0.15rem] ${borderBT} px-[1.2rem] py-[1rem]`}
    >
      {!searchValue && <Image src={searchIcon} alt="돋보기 아이콘" />}
      <input
        className="search-reset remove-search-x w-full appearance-none text-subhead-med placeholder-gray-5 focus:outline-none" // appearance-none 추가
        placeholder={placeholderText}
        onChange={handleChange}
        value={searchValue}
        type="search"
        style={
          {
            WebkitAppearance: "none",
            MozAppearance: "none",
          } as React.CSSProperties
        } // 타입 단언 사용
      />
      {isQr && (
        <Image
          src={scannerIcon}
          alt="큐알 스캐너 아이콘"
          className="cursor-pointer"
          onClick={() => setIsOn(true)}
        />
      )}
    </div>
  );
};

export default SearchInput;
