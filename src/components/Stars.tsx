import React from 'react';
import Star from './Star';

interface StarsProps {
    count: number;
}

const Stars: React.FC<StarsProps> = ({ count }) => {
    if (typeof count !== 'number' || count < 1 || count > 5) {
        return null;
    }

    const starsArray = Array.from({ length: count }, (_, index) => <Star key={index} />);

    return (
        <ul className="card-body-stars u-clearfix">
            {starsArray}
        </ul>
    );
};

export default Stars;
