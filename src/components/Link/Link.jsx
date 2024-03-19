import PropTypes from "prop-types";
const Link = ({route}) => {
  return (
    <div>
      <li className="mt-2 md:mt-0">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
  route: PropTypes.array,
};

export default Link;
