import { Skeleton, Stack } from "@mui/material";

function LoadingSkel() {
  return (
    <Stack
      width={320}
      height={512}
      borderRadius={5}
      boxShadow={2}
      px="2rem"
      py="2rem"
      gap={1}
    >
      <Stack
        direction="row"
        gap={2}
        alignItems="center"
      >
        <Skeleton
          height={80}
          width={80}
        />
        <Stack
          direction="column"
          width="100%"
        >
          <Skeleton
            height={14}
            width={72}
          />
          <Skeleton
            height={16}
            width={96}
          />
          <Skeleton
            height={12}
            width={64}
          />
        </Stack>
      </Stack>
      <Skeleton
        variant="rounded"
        height="100%"
      />
      <Skeleton
        variant="rounded"
        height={72}
      />
      <Skeleton
        variant="rounded"
        height={64}
      />
    </Stack>
  );
}

export default LoadingSkel;
