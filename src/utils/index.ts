const isCloseToBottom = ({
    layoutMeasurement,
    contentOffset,
    contentSize,
}: any) => {
    return (
        layoutMeasurement.height + contentOffset.y >= contentSize.height - 200
    );
};

export { isCloseToBottom };