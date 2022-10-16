export const User = ({
  name,
  github_username,
}: {
  name: string;
  github_username?: string;
}) => {
  return (
    <div>
      <p>
        {name}
        {github_username && (
          <a href={`https://github.com/${github_username}`}>
            <span className="opacity-60 text-xs">
              {" "}
              (GitHub: {github_username})
            </span>
          </a>
        )}
      </p>
    </div>
  );
};
