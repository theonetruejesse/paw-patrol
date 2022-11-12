import { Box, Button, VStack } from '@chakra-ui/react';
import React from 'react';

export function Navbar(props) {
	const handleClick = (name) => {
		props.handleClick(name);
	};

	const handleChange = (hashtag) => {
		props.handleChange(hashtag);
	};

	return (
		<VStack spacing={8}>
			<Box p={5} shadow='md' borderWidth='1px' borderRadius='md' w='100%'>
				<VStack spacing={4}>
					<Button
						colorScheme='blue'
						w='100%'
						size='lg'
						onClick={() => handleClick('create')}
					>
						Create Post
					</Button>
					<Button
						colorScheme='orange'
						w='100%'
						size='lg'
						name='organize'
						onClick={() => handleClick('organize')}
					>
						Organize Event
					</Button>
				</VStack>
			</Box>
			<Box p={5} shadow='md' borderWidth='1px' borderRadius='md' w='100%'>
				<VStack spacing={4}>
					<Button
						colorScheme='blackAlpha'
						w='100%'
						size='md'
						onClick={() => handleChange('#BlackLivesMatter')}
					>
						#BlackLivesMatter
					</Button>
					<Button
						colorScheme='yellow'
						w='100%'
						size='md'
						onClick={() => handleChange('#StopAsianHate')}
					>
						#StopAsianHate
					</Button>
					<Button
						colorScheme='red'
						w='100%'
						size='md'
						onClick={() => handleChange('#FreeHongKong')}
					>
						#FreeHongKong
					</Button>
					<Button
						colorScheme='green'
						w='100%'
						size='md'
						onClick={() => handleChange('#StandWithFarmers')}
					>
						#StandWithFarmers
					</Button>
				</VStack>
			</Box>
		</VStack>
	);
}
