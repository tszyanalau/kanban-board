import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { compose, withState } from 'recompose';
import Card from '../../components/Card';
import { setLastHoveredTaskId } from '../../reducers/global/actions';

const mapDispatchToProps = dispatch => ({
  onDrop: (taskId) => { dispatch(setLastHoveredTaskId(taskId)); },
});

const DraggableCard = ({
  id,
  statusId,
  content,
  isDragging,
  setIsDragging,
  isDragOver,
  setIsDragOver,
  onDrop,
}) => {
  const classes = makeStyles(({ palette: { grey } }) => ({
    root: {
      '&:hover': {
        cursor: 'grab',
        opacity: isDragging ? 0.5 : 1,
        background: grey[100],
      },
      background: isDragOver ? grey[200] : 'auto',
    },
  }))();
  return (
    <Card
      className={classes.root}
      content={content}
      draggable="true"
      onDrag={(ev) => {
        ev.preventDefault();
        if (!isDragging) {
          setIsDragging(true);
        }
      }}
      onDragStart={(ev) => {
        ev.dataTransfer.setData('taskId', id);
        ev.dataTransfer.setData('fromStatusId', statusId);
      }}
      onDragEnd={(ev) => {
        ev.preventDefault();
        if (setIsDragOver) {
          setIsDragOver(false);
        }
      }}
      onDragOver={(ev) => {
        ev.preventDefault();
        if (!isDragOver) {
          setIsDragOver(true);
        }
      }}
      onDragLeave={(ev) => {
        ev.preventDefault();
        if (setIsDragOver) {
          setIsDragOver(false);
        }
      }}
      onDrop={(ev) => {
        ev.preventDefault();
        if (setIsDragOver) {
          setIsDragOver(false);
        }
        onDrop(id);
      }}
    />
  );
};

const enhance = compose(
  connect(null, mapDispatchToProps),
  withState('isDragging', 'setIsDragging', false),
  withState('isDragOver', 'setIsDragOver', false),
);

export default enhance(DraggableCard);

DraggableCard.propTypes = {
  id: PropTypes.number,
  statusId: PropTypes.number,
  isDragging: PropTypes.bool,
  setIsDragging: PropTypes.func,
  isDragOver: PropTypes.bool,
  setIsDragOver: PropTypes.func,
  content: PropTypes.string,
  onDrop: PropTypes.func,
};
