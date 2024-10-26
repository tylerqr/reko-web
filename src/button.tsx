import React from 'react';

// Define a type for the button variants
type ButtonVariant = 'primary' | 'secondary' | 'primary-disabled' | 'secondary-disabled';

// Define a type for the icon position
type IconPosition = 'left' | 'right';

// Define a type for the button props
interface ButtonProps {
    className?: string;
    variant: ButtonVariant;
    icon?: React.ReactNode;
    iconPosition?: IconPosition;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
}

// Define global styles for the button
const baseStyles = 'px-12 py-4 flex items-center justify-center rounded-[11px]';
const variantStyles = {
    primary: 'bg-grey1 text-white text-large',
    'primary-disabled': 'bg-grey3 text-white text-large',
    secondary: 'bg-white text-grey1 text-large border-2 border-grey1',
    'secondary-disabled': 'bg-white text-grey3 text-large border-2 border-grey3',
};

const Button: React.FC<ButtonProps> = ({ className, variant, icon, iconPosition = 'left', children, onClick, disabled }) => {
    return (
        <button
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            onClick={onClick}
            disabled={disabled || variant.includes('disabled')}
        >
            {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </button>
    );
}

export default Button;
