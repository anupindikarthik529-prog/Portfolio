import React from 'react';
import {Composition} from 'remotion';
import {Untangle} from './Untangle';

export const FPS = 30;

export const Root: React.FC = () => (
  <>
    <Composition id="Untangle" component={Untangle} durationInFrames={200} fps={FPS} width={1440} height={760} />
  </>
);
