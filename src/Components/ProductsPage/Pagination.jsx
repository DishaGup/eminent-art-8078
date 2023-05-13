import React from "react";
import { Flex, Button, Text, IconButton } from "@chakra-ui/react";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

let BTN_COUNT = 5;

const getStartingIdx = (current, total) => {
  if (total - current < 2)
    return Math.max(current - (BTN_COUNT - 1 - total + current), 1);
  return Math.max(current - 2, 1);
};

const Pagination = ({ current, total, handlePageChange }) => {
  if (current === "") {
    current = 1;
  }
  current=Number(current)
  let btns = [];
  let start = getStartingIdx(current, total);
  for (let i = start; i < Math.min(start + BTN_COUNT, total + 1); i++) {
    btns.push(
      <Button
        key={i}
        size="md"
        background="transparent"
        isDisabled={i === current}
        onClick={() => handlePageChange(i)}>
        {i}
      </Button>
    );
  }
  return (
    <Flex gap="5px" mt="20px" align="center">
      <IconButton
        size="md"
        display={current === 1 ? "none" : "flex"}
        onClick={() => handlePageChange(1)}
        bg="transparent"
        aria-label="search productName"
        icon={<RxDoubleArrowLeft />}
      />
      <IconButton
        size="md"
        display={current === 1 ? "none" : "flex"}
        onClick={() => handlePageChange(current - 1)}
        bg="transparent"
        aria-label="search productName"
        icon={<IoIosArrowBack />}
      />
      {btns}
      <IconButton
        size="md"
        display={current === total ? "none" : "flex"}
        onClick={() => handlePageChange(current + 1)}
        bg="transparent"
        aria-label="search productName"
        icon={<IoIosArrowForward />}
      />
      <IconButton
        size="md"
        display={current === total ? "none" : "flex"}
        onClick={() => handlePageChange(total)}
        bg="transparent"
        aria-label="search productName"
        icon={<RxDoubleArrowRight />}
      />
    </Flex>
  );
};

export default Pagination;