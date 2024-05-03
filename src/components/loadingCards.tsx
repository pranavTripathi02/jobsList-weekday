import LoadingSkel from "./loadingSkel";

function LoadingCards() {
  const loadingArr = [1, 2, 3, 4];
  return (
    <>
      {loadingArr.map((idx) => (
        <LoadingSkel key={idx} />
      ))}
    </>
  );
}

export default LoadingCards;
