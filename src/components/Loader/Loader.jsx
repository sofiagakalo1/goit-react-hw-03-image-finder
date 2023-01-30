import PropTypes from 'prop-types';
import { ThreeCircles } from 'react-loader-spinner';
import Button from '../Button';

const Loader = ({ page, totalPages, loading, loadMore }) => {
  if (loading) {
    return (
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    );
  }
  if (!totalPages) {
    return <p>No matches. Try to find something else :(</p>;
  }
  if (page !== totalPages) {
    return <Button type="button" text="Load more" loadMore={loadMore} />;
  }
};

export default Loader;

Loader.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
};
