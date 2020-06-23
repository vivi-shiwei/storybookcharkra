import * as React from "react"
import { chakra, Icon, Stack, Link } from "@chakra-ui/core"
import { MdEdit } from "react-icons/md"

export function GithubLink({ path }) {


    return (
        <Link href="\" isExternal>
            <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                fontSize="sm"
                opacity={0.7}
            >
                <Icon as={MdEdit} fontSize="1em" mr="1" />
                <chakra.span>Edit this page on GitHub</chakra.span>
            </Stack>
        </Link>
    )
}