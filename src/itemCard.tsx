import React from "react";

interface ItemCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
  minWidth?: string;
  maxWidth?: string;
  minHeight?: string;
  maxHeight?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  image,
  name,
  price,
  description,
  minWidth = "250px",
  maxWidth = "300px",
  minHeight = "350px",
  maxHeight = "400px",
}) => {
  return (
    <div
      className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-grey5"
      style={{
        minWidth: minWidth,
        maxWidth: maxWidth,
        minHeight: minHeight,
        maxHeight: maxHeight,
      }}
    >
      <div className="relative h-1/2">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black bg-gradient-to-t from-grey1 to-transparent">
          <h3 className="fontSize-title0 text-white p-4">{name}</h3>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-4 flex flex-col justify-between h-1/2">
        {/* Price and add to cart button */}
        <div className="flex items-center justify-between">
        <div className="fontSize-title0 text-grey1">{price}</div>
        <button className=" px-4 py-2 border border-grey1 fontSize-macro text-grey1 rounded-full hover:bg-grey1 hover:text-white">
          Add to cart
        </button>
        </div>

        {/* Description */}
        <p className="text-small text-grey2 mt-4 line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;