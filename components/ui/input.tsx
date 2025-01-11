import * as React from 'react';
import { TextInput, type TextInputProps, View, Text } from 'react-native';
import { cn } from '~/lib/utils';

interface InputProps extends TextInputProps {
  label?: string;
  leftIcon?: React.ReactNode;
  error?: string;
}

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, placeholderClassName, label, leftIcon, error, ...props }, ref) => {
    return (
      <View className="mb-4">
        {label && (
          <Text className="text-sm mb-1 text-gray-500  dark:text-gray-400">
            {label}
          </Text>
        )}
        <View className="flex-row items-center bg-gray-100 dark:bg-stone-900 rounded-xl px-3">
          {leftIcon && <View className="mr-2">{leftIcon}</View>}
          <TextInput
            ref={ref}
            className={cn(
              'flex-1 py-2 text-base text-black dark:text-white',
              error && 'border-red-500',
              className
            )}
            placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
            placeholderTextColor="#999"
            {...props}
          />
        </View>
        {error && (
          <Text className="text-sm text-red-500 mt-1">
            {error}
          </Text>
        )}
      </View>
    );
  }
);

Input.displayName = 'Input';

export { Input };
