import React from "react";
import PlaylistItem from "../PlaylistItem";
import StyledPlaylistitems from "../styles/StyledPlaylistitems";
import withLink from "./../hoc/withLink";

const PlaylistItemWithLink = withLink(PlaylistItem);

const Playlistitems = ({ videos, active }) => (
    <StyledPlaylistitems>
        {videos.map(video => (
            <PlaylistItemWithLink
                key={video.id}
                video={video}
                active={video.id === active.id ? true : false}
                played={video.played}
            />
        ))}
    </StyledPlaylistitems>
);

export default Playlistitems;
