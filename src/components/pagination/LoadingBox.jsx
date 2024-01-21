import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function LoadingBox() {
  return (
    <div>
      <Skeleton count={4} height={175} />
    </div>
  );
}
