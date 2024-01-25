import { Skeleton } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const SkeletonHome = () => {
  return (
    <Container>
      <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1em" }} />
      <Skeleton variant="rounded" width="100%" height={150} sx={{ marginBottom: "1em" }} />
    </Container>
  )
};

export default SkeletonHome;